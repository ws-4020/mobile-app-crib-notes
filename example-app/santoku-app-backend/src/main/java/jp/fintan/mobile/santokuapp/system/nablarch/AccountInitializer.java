package jp.fintan.mobile.santokuapp.system.nablarch;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import javax.sql.DataSource;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import jp.fintan.mobile.santokuapp.infrastructure.service.PBKDF2PasswordHashingProcessor;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.repository.initialization.Initializable;
import nablarch.core.util.StringUtil;

public class AccountInitializer implements Initializable {

  private static final Logger LOGGER = LoggerManager.get(AccountInitializer.class);
  private DataSource dataSource;
  public DataSource getDataSource() {
    return dataSource;
  }

  public void setDataSource(DataSource dataSource) {
    this.dataSource = dataSource;
  }

  private String accountPassword;
  public String getAccountPassword() {
    return accountPassword;
  }

  public void setAccountPassword(String accountPassword) {
    this.accountPassword = accountPassword;
  }

  @Override
  public void initialize() {
    List<String> accounts = List.of("santoku", "admin", "partner");

    if (StringUtil.isNullOrEmpty(accountPassword)) {
      LOGGER.logWarn("Initial account data could not be registered because no password was set in environment variable or system properties.");
      return;
    }
    String hashedPassword = new PBKDF2PasswordHashingProcessor().hash(new RawPassword(accountPassword)).value();

    try(
        Connection connection = dataSource.getConnection();
        ) {
      for (String account : accounts) {
        try(
            PreparedStatement accountStatement = connection.prepareStatement("insert into account (account_id, nickname) values (?, ?)");
            PreparedStatement passwordStatement = connection.prepareStatement("insert into password (account_id, password) values (?, ?)");
            ) {
          accountStatement.setString(1, account);
          accountStatement.setString(2, account);
          passwordStatement.setString(1, account);
          passwordStatement.setString(2, hashedPassword);
          accountStatement.execute();
          passwordStatement.execute();
        } catch (SQLException e) {
          throw new RuntimeException(e);
        }
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }
}

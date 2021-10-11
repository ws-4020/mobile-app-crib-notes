package jp.fintan.mobile.santokuapp.presentation.restapi.signup;

import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import jp.fintan.mobile.santokuapp.application.service.account.AccountRegistrationService;
import jp.fintan.mobile.santokuapp.domain.model.account.Account;
import jp.fintan.mobile.santokuapp.domain.model.account.RawPassword;
import jp.fintan.mobile.santokuapp.domain.model.account.UserName;
import jp.fintan.mobile.santokuapp.presentation.restapi.account.MyAccountAction.AccountResponse;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.core.validation.ee.ValidatorUtil;

@SystemRepositoryComponent
@Path("/signup")
public class SignupAction {

  private final AccountRegistrationService accountRegistrationService;

  public SignupAction(AccountRegistrationService accountRegistrationService) {
    this.accountRegistrationService = accountRegistrationService;
  }

  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  public AccountResponse signup(SignupRequest requestBody) {
    ValidatorUtil.validate(requestBody);

    Account account =
        accountRegistrationService.registerAccount(requestBody.userName, requestBody.password);
    return new AccountResponse(account);
  }

  public static class SignupRequest {

    @NotNull public UserName userName;

    @NotNull public RawPassword password;
  }
}

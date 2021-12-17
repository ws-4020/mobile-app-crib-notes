find_by_account_id =
select
  *
from
  device
where
  account_id = :accountId

delete_by_account_id =
delete
from
  device
where
  account_id = :accountId


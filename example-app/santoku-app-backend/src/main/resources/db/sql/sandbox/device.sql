delete_by_device_tokens =
delete
from
  device
where
  device_token in (:deviceTokens[])

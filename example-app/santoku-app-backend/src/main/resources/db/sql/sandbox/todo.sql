find_all_order_by =
SELECT
  *
FROM
  sandbox_todo
ORDER BY
  id

find_all_by_cursor =
SELECT
  *
FROM
  sandbox_todo
WHERE
  id > :todoId
ORDER BY
  id

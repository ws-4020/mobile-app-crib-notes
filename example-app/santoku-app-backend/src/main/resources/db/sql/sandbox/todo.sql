find_all_order_by_id_asc =
SELECT
  *
FROM
  sandbox_todo
ORDER BY
  id ASC

find_all_order_by_id_desc =
SELECT
  *
FROM
  sandbox_todo
ORDER BY
  id DESC

find_all_order_by_title_asc =
SELECT
  *
FROM
  sandbox_todo
ORDER BY
  title ASC

find_all_order_by_title_desc =
SELECT
  *
FROM
  sandbox_todo
ORDER BY
  title DESC

find_all =
SELECT
  *
FROM
  sandbox_todo
ORDER BY
  id

find_all_from_cursor =
SELECT
  *
FROM
  sandbox_todo
WHERE
  $if (todoId) {id > :todoId}
ORDER BY
  id

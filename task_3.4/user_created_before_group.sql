SELECT u.firstName, u.lastName, ug.name
FROM user u
JOIN groupMembership gm ON u.id = gm.userID
JOIN userGroup ug ON gm.groupID = ug.id
WHERE u.created < ug.created;

SELECT ug.name 
FROM userGroup ug
LEFT JOIN groupMembership gm ON ug.id = gm.groupID
WHERE ug.name LIKE 'TEST-%' AND gm.groupID IS NULL;

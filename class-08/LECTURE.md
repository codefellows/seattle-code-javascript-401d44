# Class 08: Authorization

## Announcements

* Cascadia JS conference Wednesday and Thursday next week (4th / 5th of november)!!!
  * Technically 1 day of content is missed.
  * Most are synchrounouns, some talks are asynchronous.

## Code Review

* tests: Different results when running tests back to back.
  * memory file: is our in-memory database.
  * Product of mutation of you data.
    * take the dash out of a test file.
* dones in the afterall / beforeall where causing some issues.
* testing suites are not running everything WHEN we need them to.

## Authorization

If authentication: `Who are you?`
* once we know who someone is:
  Authorization: `Are you allowed to do that?`
  * There are often different types of users on a system: How can we implement Access based on user type?
    * SImplest way to think about this: generic-user vs and admin-user.
    * Create a table with user types mapped to user capabilities.
      * User: `read and create`
      * Admin: `read create update and delete`.

### DEMO: Access Control List

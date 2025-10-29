# TODO List for Fixing Login and Registration

## Current Tasks
- [x] Test registration functionality
- [x] Test login functionality
- [x] Verify session management and navbar updates

## Completed Tasks
- [x] Analyze login.html and register.html structure
- [x] Analyze script.js authentication logic
- [x] Identify root cause: event listeners attached before DOM ready
- [x] Identify additional issues: untrimmed inputs and case-sensitive emails
- [x] Move form event listeners inside DOMContentLoaded in script.js
- [x] Trim email and password inputs before processing
- [x] Make email comparisons case-insensitive in registration and login

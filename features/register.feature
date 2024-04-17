Feature: Registration

  Scenario Outline: User Registration
    Given I am on the login page
    When I click on the register button
    And I enter '<name>', '<email>', and '<password>'
    And I click on the submit button
    Then I should see '<message>'

  Examples:
    | name     | email                  | password | message                              | 
    | yourname | lamchitinh@gmail.com   | password | User Created! Redirecting...        | 
    | yourname | existingemail@gmail.com | password | Email đã được dùng                   | 
    |        | lamchitinh@gmail.com                     | password       | Vui lòng cung cấp đủ các trường dữ liệu! |
    | yourname       |                      | password       | Vui lòng cung cấp đủ các trường dữ liệu! |
    | yourname       | lamchitinh@gmail.com                     |        | Vui lòng cung cấp đủ các trường dữ liệu! |
    |        |                      |        | Vui lòng cung cấp đủ các trường dữ liệu! |

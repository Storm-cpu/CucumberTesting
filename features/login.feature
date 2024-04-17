Feature: Login

  Scenario Outline: User Login
    Given I am in the login page
    When I enter '<email>' and '<password>'
    And I click on the login button
    Then I will see '<message>'

  Examples:
    | email                  | password | message                              | 
    | lamchitinh@gmail.com   | password | Đăng nhập thành công! Đang chuyển hướng...         | 
    | nonexistentemail@gmail.com | password | Thông tin không hợp lệ             | 
    | existingemail@gmail.com                     | wrongpassword       | Thông tin không hợp lệ |
    | existingemail@gmail.com                     |        | Vui lòng cung cấp đủ các trường dữ liệu! |
    |                      | password       | Vui lòng cung cấp đủ các trường dữ liệu! |
    |                      |        | Vui lòng cung cấp đủ các trường dữ liệu! |

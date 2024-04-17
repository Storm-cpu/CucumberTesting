Feature: Add Job

  Background:
    Given I am in the login page
    When I enter "lamchitinh1472002@gmail.com" and "Lamchitinh.2"
    And I click on the login button
    Then I will be redirected to the home page

  Scenario Outline: Add new job
    Then I click on the add job button
    And I enter "<position>", "<company>", and "<jobLocation>" into the form
    And I select "<status>", "<jobType>"
    And I click on the 'Save' button
    Then I will receive a message "<message>"

  Examples:
    | position | company  | jobLocation           | status     | jobType | message                            |
    | Developer    | ABC |  | 2 | 2   | Tạo mới thành công!   |
    | Designer |  |    | 2  | 2    | Vui lòng cung cấp đủ các trường dữ liệu!   |
    |  | ACB |      | 2  | 2    | Vui lòng cung cấp đủ các trường dữ liệu!   |
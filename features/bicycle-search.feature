Feature: Bicycle availability
  We have a list of  bicycles that contain bicycle color, bicycle size, bicycle price
  availability
  We have to Use one of those criteria as the search to show me the other bicycle
  attributes

  Scenario Outline: Display Bicycle Availability with color
    Given I log into the website as {user_name}
    When I search for bicycles based on  color with  {bicycle_colour}
    Then check availability with {bicycle_availability}
    And Display Available bicycles
    Examples:
      | user_name | bicycle_colour | bicycle_availability |
      | "user_1"  | "red"       | yes                  |
      | "user_2"  | "blue"      | yes                  |
      | "user_3"  | "black"     | no                   |

  Scenario Outline: Display Bicycle Availability with price
    Given I log into the website as {user_name}
    When I search for bicycles based on price with  ${bicycle_price}
    Then check availability with {bicycle_availability}
    And Display Available bicycles
    Examples:
      | user_name | bicycle_price | bicycle_availability |
      | "user_1"  | 100        | yes                  |
      | "user_2"  | 200        | yes                  |
      | "user_3"  | 300        | no                   |
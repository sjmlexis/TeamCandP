Feature: Tour Of Heroes

	This feature is regarding heroes stuff

Background: 
    Given the user navigates to the dashboard

    Scenario: The user is on the dashboard and wants to view the top 4 heroes
		When a user is on the dashboard
		Then the user will be able to view 4 heroes

    Scenario: The user is on the dashboard and wants to view a selected heroes detail page
		When a user clicks on a hero
		Then the user will be navigated to the hero details page.

	Scenario: The user is on the dashboard and want to see amount of heroes
		Given the user navigates to the dashboard
		When the user clicks on the heroes button
		Then the user will be navigated to the heroes list page and views x amount of heroes

	Scenario: The user is on the dashboard and wants to remove a hero
		Given the user navigates to the dashboard
		When the user clicks on the heroes button
		Then the user is on the heroes screen
		When the user deletes a user
		Then the list is shorter than started

	Scenario: The user is on the dashboard and wants to add a hero
		Given the user navigates to the dashboard
		When the user clicks on the heroes button
		Then the user is on the heroes screen
		Then the user fills in a name in the hero name field
		Then the user clicks the add button
		Then the list is longer than when started

	Scenario: The user is on the dashboard and wants to add a blank hero
		Given the user navigates to the dashboard
		When the user clicks on the heroes button
		Then the user is on the heroes screen
		Then the user fills in a blank in the hero name field
		Then the user clicks the add button
		Then the list is longer than when started
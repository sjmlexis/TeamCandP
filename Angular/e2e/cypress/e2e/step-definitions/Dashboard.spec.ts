import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { Dashboard } from '../page-objects/Dashboard';


Given(/^the user navigates to the dashboard$/, () => {
    cy.visit("http://localhost:4200/dashboard");
});


When(/^a user is on the dashboard$/, () => {
	return Dashboard.ValidateDashboardComponent();
});

Then(/^the user will be able to view 4 heroes$/, () => {
    if(Dashboard.FindHeroesList()){
        return Dashboard.CheckHeroesListNumber();
    };
});


When(/^a user clicks on a hero$/, () => {
	 Dashboard.ClickOnHero();
});

Then(/^the user will be navigated to the hero details page.$/, () => {
    return Dashboard.isOnDetailsPage();
});


When(/^the user clicks on the heroes button$/, () => {
	 Dashboard.ClickHeroesButton();
});

Then(/^the user will be navigated to the heroes list page and views x amount of heroes$/, () => {
    return Dashboard.CheckNumberOfHeroes();
});


Then(/^the user is on the heroes screen$/, () => {
    return Dashboard.IsOnHeroesScreen();
});

When(/^the user deletes a user$/, () => {
	 Dashboard.DeleteHero();
});

Then(/^the list is shorter than started$/, () => {
	return Dashboard.CheckHeroDeleted();
});

Then(/^the user fills in a name in the hero name field$/, () => {
	 Dashboard.FillHeroName();
});

Then(/^the user clicks the add button$/, () => {
	 Dashboard.ClickAddHero();
});

Then(/^the list is longer than when started$/, () => {
	return Dashboard.CheckHeroAdded();
});

Then(/^the user fills in a blank in the hero name field$/, () => {
	 Dashboard.FillBlank();
});

Then(/^the user clicks the add button$/, () => {
   Dashboard.ClickAddHero();
});

Then(/^the list is not longer than when started$/, () => {
	return Dashboard.ListUnchanged();
});


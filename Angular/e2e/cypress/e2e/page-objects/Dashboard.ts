export class Dashboard{

    static DashboardComponent=():string=>{return "//app-dashboard"}
    static IsTopHeroes=():string=>{ return "//app-dashboard//h2[contains(text(),'Top Heroes')]"} 
    static TopHeroesList=():string=> { return "//app-dashboard//div[@class='heroes-menu']//a"}
    static HeroDetailPage=():string=> { return "//app-hero-detail//div//h2[contains(text(),' Details')]"}

    static HeroesButton=():string=> {return "//app-root//nav//a[@routerlink='/heroes']"}
    static HeroesPage=():string=> {return "//app-heroes//h2[contains(text(),'My Heroes')]"}
    static HeroesList=():string=> {return "//app-heroes//ul[@class='heroes']//li"}

    static HeroesDeleteBtn=():string=> {return "//app-heroes//ul[@class='heroes']//li/button[@class='delete']"}
    static HeroesAddBtn=():string=> {return "//app-heroes//div//button[@class='add-button']"}
    static HeroNameInputField=():string=> { return "//app-heroes//div//input[@id='new-hero']"}

    static oldHeroesVal = 0;
    static newHeroesVal = 0;

    static ValidateDashboardComponent(){
        cy.xpath(this.DashboardComponent())
        .should('exist');
    }

    static FindHeroesList(){
        if(cy.xpath(this.IsTopHeroes())
        .should('exist')){
            return true;
        }
        
        return false;
    }

    static CheckHeroesListNumber(){
        return cy.xpath(this.TopHeroesList()).should('have.length', 4);
    }


    static ClickOnHero(){
        return cy.xpath(this.TopHeroesList()).first().click();
    }

    static isOnDetailsPage(){
        return cy.xpath(this.HeroDetailPage())
    }

    static ClickHeroesButton(){
        return cy.xpath(this.HeroesButton()).click();
    }

    static CheckNumberOfHeroes(){
        return cy.xpath(this.HeroesList()).should('have.length', 9);
    }

    static IsOnHeroesScreen(){
        cy.xpath(this.HeroesList()).then(elm => this.oldHeroesVal = elm.length);
        return cy.xpath(this.HeroesPage())
    }

    static DeleteHero(){
        cy.xpath(this.HeroesDeleteBtn()).first().click();
        cy.wait(500)
        return cy.xpath(this.HeroesList()).then(elm => this.newHeroesVal = elm.length);
    }

    static CheckHeroDeleted(){
        return cy.xpath(this.HeroesList()).should('have.length.below',this.oldHeroesVal);
    }

    static FillHeroName(){
        this.oldHeroesVal = 0;
        this.newHeroesVal = 0;
        cy.xpath(this.HeroNameInputField()).type("Some random Hero name");
        return  cy.xpath(this.HeroesList()).then(elm => this.oldHeroesVal = elm.length);       

    }

    static ClickAddHero(){
        cy.xpath(this.HeroesAddBtn()).click();
        cy.wait(1000);
        return cy.xpath(this.HeroesList()).then(elm => this.newHeroesVal = elm.length);
   
    }

    static CheckHeroAdded(){
        return  cy.xpath(this.HeroesList()).should('have.length',this.newHeroesVal);
    }

    static FillBlank(){
        this.oldHeroesVal = 0;
        this.newHeroesVal = 0;
        cy.xpath(this.HeroNameInputField()).type(" ");
        return cy.xpath(this.HeroesList()).then(elm => this.oldHeroesVal = elm.length);
    }

    static ListUnchanged(){
        cy.xpath(this.HeroesList()).then(elm => this.newHeroesVal = elm.length);
        return  cy.xpath(this.HeroesList()).should('have.length',this.oldHeroesVal);
    }
}
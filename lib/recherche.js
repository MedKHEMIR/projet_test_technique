'use strict'

function recherche() { }

recherche.recherchecountry = (countryList, filterAnimalNameString, enableCount) => {

    let resultList = [];
    if (filterAnimalNameString) {
        countryList.forEach(countryItem => {
            let countryTemp = new Country(countryItem.name);
            if (countryItem.people && Array.isArray(countryItem.people)) {
                countryItem.people.forEach(peopleItem => {
                    let peopleTemp = new People(peopleItem.name);
                    if (peopleItem.animals && Array.isArray(peopleItem.animals)) {
                        peopleItem.animals.forEach(animalItem => {
                            let animalTemp = new Animal(animalItem.name);
                            if (animalTemp.name && animalTemp.name.search(filterAnimalNameString) !== -1) {
                                peopleTemp.animals.push(animalTemp);
                            }
                        })
                    }
                    if (peopleTemp.animals.length > 0) {
                        countryTemp.people.push(peopleTemp);
                    }

                })
            }
            if (countryTemp.people.length > 0) {
                resultList.push(countryTemp);
            }
        });
    } else {
        resultList = countryList;
    }

    if (enableCount) {
        resultList = countPeopleAndAnimals(resultList);
    }


    return resultList;
}

function countPeopleAndAnimals(countryList) {
    let addedCountResultList = countryList.map(countryItem => {
        countryItem.name += ` [${countryItem.people.length}]`;
        countryItem.people = countryItem.people.map(peopleItem => {
            peopleItem.name += ` [${peopleItem.animals.length}]`;
            return peopleItem;
        });
        return countryItem;
    });
    return addedCountResultList;
}

class Country {
    constructor(nameInput) {
        this.name = nameInput;
        this.people = []
    }
}

class People {
    constructor(nameInput) {
        this.name = nameInput;
        this.animals = [];
    }
}
class Animal {
    constructor(nameInput) {
        this.name = nameInput;
    }
}

module.exports = recherche

const getStoredCardApplication = () =>{
    const storedCardApplication = localStorage.getItem('card-application');
    if(storedCardApplication){
        return JSON.parse(storedCardApplication)
    }
    return [];

}


const saveDonationApplication = id =>{
    const storedCardApplications = getStoredCardApplication();
    const exists = storedCardApplications.find(cardId => cardId === id);
    if(!exists){
        storedCardApplications.push(id);
        localStorage.setItem('card-application' , JSON.stringify(storedCardApplications))
    }

}


export {getStoredCardApplication , saveDonationApplication}
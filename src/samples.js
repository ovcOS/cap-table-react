const samples = {
  sampleInvestors: {
    investor1 : {
      _id: 'id1',
      name: "Elon Must",
      email: "teslainarocket@falcon.com",
      address: {
        line1: "Rocket Rd",
        line2:"",
        postcode: 90250,
        city: "Hawthorne, CA",
        country: "US"
      }
    },
    investor2 : {
      _id: 'id2',
      name: "Michelle O'bima",
      email: "gotguns@bama.com",
      address: {
        line1: "245 Fourth Ave",
        line2:"",
        postcode: 34250,
        city: "Windsor, ON",
        country: "CA"
      }
    },
    investor3 : {
      _id: 'id3',
      name: "Jeffy Besos",
      email: "biggestjungle@earth.io",
      address: {
        line1: "Palmeira Blvd 792",
        line2:"",
        postcode: 5223,
        city: "Manaus",
        country: "BR"
      }
    },
    investor4 : {
      _id: 'id4',
      name: "Walter Black",
      email: "letscook@jessie.global",
      address: {
        line1: "4 Maple St",
        line2:"",
        postcode: 52250,
        city: "Albuquerque, NM",
        country: "US"
      }
    },
    investor5 : {
      _id: 'id5',
      name: "Peter Prank",
      email: "gottheweb@google.com",
      address: {
        line1: "Zweierstrasse 100",
        line2:"",
        postcode: 8003,
        city: "Zürich",
        country: "CH"
      }
    }
  },

  sampleIssues: {
    issue1: {
      shareholderId: 'id1',
      date: new Date(),
      amount: 600000,
      pricePerShare: 150, 
    },
    issue2: {
      shareholderId: 'id2',
      date: new Date(),
      amount: 80000,
      pricePerShare: 270, 
    },
    issue3: {
      shareholderId: 'id3',
      date: new Date(),
      amount: 900000,
      pricePerShare: 120, 
    },
    issue4: {
      shareholderId: 'id4',
      date: new Date(),
      amount: 100000,
      pricePerShare: 90, 
    },
    issue5: {
      shareholderId: 'id5',
      date: new Date(),
      amount: 60000,
      pricePerShare: 100, 
    },
  }
}


export default samples;
This is a website that shows Authorities that may certify an apostille (a document authentication) for that country.
Main reference: https://www.hcch.net/en/instruments/conventions/authorities1/?cid=41

Format for countries in JSON:

"country_name":{
    "national_agencies":[
        {
            "name":"name",
            "address": "physical address",
            "tel":["tel1","tel2"],
            "fax":["fax1","fax2"],
            "email": ["email1","email2"],
            "website": ["web1","web2"],
            "contacts ": ["contact1","contact2"]
        },
        {
            "name":"agency2",
            ...
        }
    ],
    "lgu":[
        {
            "name":"statename",
            "authority": "person/office in charge",
            "address": "physical address",
            "tel":["tel1"],
            "fax":["fax1"],
            "email": ["email1"],
            "website": ["web1"],
            "contacts": ["contact1"]
        },
        {
            "name":"statename",
            "authority": "person_in_charge",
            "website": ["web1"],
        },
    ]
}
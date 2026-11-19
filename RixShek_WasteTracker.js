const organisations = [
    {
        organisationId: 1,
        name: "ABC Company",
        location: "Ang Mo Kio"
    },
    {
        organisationId: 2,
        name: "XYZ School",
        location: "Jurong West"
    },
    {
        organisationId: 3,
        name: "DEF Office",
        location: "Tampines"
    }
];

const wasteRecords = [
    {
        wasteId: 1,
        organisationId: 1,
        wasteType: "Plastic",
        quantity: 10,
        disposalMethod: "Recycling",
        dateRecorded: "2026-11-01"
    },
    {
        wasteId: 2,
        organisationId: 1,
        wasteType: "Paper",
        quantity: 15,
        disposalMethod: "Recycling",
        dateRecorded: "2026-11-02"
    },
    {
        wasteId: 3,
        organisationId: 1,
        wasteType: "General",
        quantity: 20,
        disposalMethod: "Landfill",
        dateRecorded: "2026-11-03"
    },
    {
        wasteId: 4,
        organisationId: 1,
        wasteType: "Organic",
        quantity: 12,
        disposalMethod: "Composting",
        dateRecorded: "2026-11-04"
    },
    {
        wasteId: 5,
        organisationId: 2,
        wasteType: "Plastic",
        quantity: 8,
        disposalMethod: "Recycling",
        dateRecorded: "2026-11-05"
    }
];

const collectionSchedules = [
    {
        collectionId: 1,
        organisationId: 1,
        wasteType: "Plastic",
        quantity: 10,
        collectionDate: "2026-11-20",
        status: "Pending"
    },
    {
        collectionId: 2,
        organisationId: 1,
        wasteType: "Paper",
        quantity: 15,
        collectionDate: "2026-11-21",
        status: "Pending"
    },
    {
        collectionId: 3,
        organisationId: 2,
        wasteType: "General",
        quantity: 25,
        collectionDate: "2026-11-18",
        status: "Collected"
    },
    {
        collectionId: 4,
        organisationId: 2,
        wasteType: "Glass",
        quantity: 14,
        collectionDate: "2026-11-22",
        status: "Pending"
    },
    {
        collectionId: 5,
        organisationId: 3,
        wasteType: "Electronic",
        quantity: 6,
        collectionDate: "2026-11-19",
        status: "Cancelled"
    }
];

const wasteTypes = [
    "Plastic",
    "Paper",
    "Glass",
    "Metal",
    "General",
    "Organic",
    "Electronic"
];

const disposalMethods = [
    "Recycling",
    "Landfill",
    "Composting"
];

const collectionStatuses = [
    "Pending",
    "Collected",
    "Cancelled"
];


module.exports = {
    addWasteRecord(organisationid, wastetype, quantity, disposalmethod, daterecorded) {
        let wasteid = wasteRecords.length + 1;

        wasteRecords.push({
            wasteId: wasteid,
            organisationId: organisationid,
            wasteType : wastetype,
            quantity : quantity,
            disposalMethod: disposalmethod,
            dateRecorded: daterecorded
        })
    },

    getAllWasteRecords() {
        return wasteRecords;
    },

    filterWasteByType(wastetype) {
        let result = [];
        for (let i = 0; i < wasteRecords.length; i++){
            if (wasteRecords[i].wasteType == wastetype) {
                result.push(wasteRecords[i]);
            }
        }
        return result;
    },

    scheduleCollection(organisationid, wastetype, quantity, collectiondate) {
        let collectionid = collectionSchedules.length + 1;
        let status = "Pending";

        collectionSchedules.push({
            collectionId: collectionid,
            organisationId: organisationid,
            wasteType : wastetype,
            quantity : quantity,
            collectionDate: collectiondate,
            status: status
        })
    },

    calculateWasteSummary() {
        let totalWaste = 0;
        let totalRecycled = 0;
        let totalLandfill = 0;

        for (let i = 0; i < wasteRecords.length; i++) {
            totalWaste += wasteRecords[i].quantity;

            if (wasteRecords[i].disposalMethod == "Recycling") {
                totalRecycled += wasteRecords[i].quantity;
            } else if (wasteRecords[i].disposalMethod == "Landfill") {
                totalLandfill += wasteRecords[i].quantity;
            }
        }
        return {
            totalWaste: totalWaste,
            totalRecycled: totalRecycled,
            totalLandfill: totalLandfill
        }
    }
}

module.exports.addWasteRecord(1, "Paper", 12, "recycling", "2026-01-05");

console.log(module.exports.getAllWasteRecords());

console.log(module.exports.filterWasteByType("Plastic"));

console.log(module.exports.calculateWasteSummary());
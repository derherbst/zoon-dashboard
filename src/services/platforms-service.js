export default class PlatformsService {
    _data = [
        {
            "id": 1,
            "title": "Google",
            "status": "active",
            "active": true,
            "places": 30,
            "synced": true,
            "pagesToCreate": 0,
            "configured": 30,
            "search": 0,
            "allDone": true,
            "hasUpdates": true,
            "needsWork": false,
            "pagesCreate": 0,
            "rate": 4.5,
            "reviews": 198,
            "unanswered": 15,
            "options": ['info', 'price', 'photo', 'promo']

        },
        {
            "id": 2,
            "title": "Flado",
            "status": "active",
            "places": 30,
            "synced": false,
            "pagesToCreate": 3,
            "configured": 4,
            "search": 20,
            "allDone": false,
            "hasUpdates": false,
            "needsWork": true,
            "pagesCreate": 3,
            "rate": 0,
            "reviews": 0,
            "unanswered": 0,
            "options": ['info', 'price', 'photo', 'promo']

        },
        {
            "id": 3,
            "title": "2Gis",
            "status": "pending",
            "places": 0,
            "synced": false,
            "pagesToCreate": 3,
            "configured": 0,
            "search": 78,
            "allDone": false,
            "hasUpdates": true,
            "needsWork": true,
            "pagesCreate": 3,
            "rate": null,
            "reviews": 0,
            "unanswered": 0,
            "options": []

        },
        {
            "id": 4,
            "title": "Yell",
            "status": "inactive",
            "places": 0,
            "synced": false,
            "pagesToCreate": 0,
            "configured": 0,
            "search": 78,
            "allDone": false,
            "hasUpdates": false,
            "needsWork": false,
            "pagesCreate": 0,
            "rate": null,
            "reviews": 0,
            "unanswered": 0,
            "options": []

        }
    ];

    // getPlatforms = async () => {
    //     return this._data;
    // };

    getPlatforms() {
        return new Promise((resolve, reject) => {
                    resolve(this._data);

        });
    }
}

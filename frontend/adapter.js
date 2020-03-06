class Adapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/';
        this.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
    }

    fetchFields() {
        return this.get(`${this.baseUrl}/fields`);
    }

    updateField(id, body) {
        return this.patch(`${this.baseUrl}/fields/${id}`, location);
    }

    get(url) {
        return fetch(url).then(res => res.json());
    }

    patch(url, location) {
        return fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            location: JSON.stringify(location),
        }).then(res => res.json());
    }
}
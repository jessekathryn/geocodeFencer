class Adapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1';
        this.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
    }

    fetchFields() {
        return this.get(`${this.baseUrl}/fields`);
    }

    updateField(id, input) {
        return this.patch(`${this.baseUrl}/fields/${id}`, input);
    }

    get(baseUrl) {
        return fetch(baseUrl).then(res => res.json());
    }

    patch(baseUrl, input) {
        return fetch(baseUrl, {
            method: 'PATCH',
            headers: this.headers,
            id: this.id,
            input: JSON.stringify(input),
        }).then(res => res.json());
    }
}
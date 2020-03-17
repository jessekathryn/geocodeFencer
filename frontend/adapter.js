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

    createField(id, input) {
        return this.post(`${this.baseUrl}/fields/${id}`, input);
    }
    get(url) {
        return fetch(url).then(res => res.json());
    }

    post(url, input) {
        return fetch(url,{
            method: 'POST',
            headers: this.headers,
            id: this.id,
            body: JSON.stringify(input),
        }).then(res => res.json());
    }

    patch(url, input) {
        return fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            id: this.id,
            body: JSON.stringify(input),
        }).then(res => res.json());
    }
}
class BandsiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async getComments() {
        const url=`${this.baseUrl}/comments/?api_key=${this.apiKey}`
        const response = await axios.get(url);
        return response.data;
    }

    async addComment(comment) {
         const url=`${this.baseUrl}/comments/?api_key=${this.apiKey}`
         const response = await axios.post(url, comment);
         return response.data;
    }

    async deleteComment(commentID) {
        const url=`${this.baseUrl}/comments/${commentID}?api_key=${this.apiKey}`
         const response = await axios.delete(url, commentID);
         return response.data;
    }
}
const Movie = (param) => {
    return {id: param.id, title: param.title, description: param.description || '', regDate: Date.now()};
}

module.exports = Movie;

// export class Movie {
//     _id;
//     _title;
//     _description;
//     _regDate;

//     constructor(param) {
//         this._id = param.id;
//         this._title = param.title;
//         this._description = param.description || '';
//         this._regDate = Date.now();
//     }

//     set id(id) {
//         this._id = id;
//     }

//     get id() {
//         return this._id;
//     }

//     set title(title) {
//         this._title = title;
//     }

//     get title() {
//         return this._title;
//     }

//     set regDate(regDate) {
//         this._regDate = regDate;
//     }

//     get regDate() {
//         return this._regDate;
//     }

//     set description(description) {
//         this._description = description;
//     }

//     get description() {
//         return this._description;
//     }
// }
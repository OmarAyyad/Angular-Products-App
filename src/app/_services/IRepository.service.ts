interface IRepository{
    getAll();
    getById(id:number);
    add(entity:any);
    save(entity:any);
    delete(id:number);
}
import {Model, DataTypes} from "sequelize";
import {sequelize }from '../instances/mysql';

export interface TodoInterface extends Model {
    id: number,
    title: string,
    done: number;
}

export const Todo = sequelize.define<TodoInterface>('Todo',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type: DataTypes.INTEGER
    },
    title:{
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.INTEGER,
        defaultValue:0
    }
},{
    tableName:'todos',
    timestamps: false    
});
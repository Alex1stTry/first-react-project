import React, {FC} from 'react';

import css from './Buttons.module.css'

import {IGenre} from "../../interfaces";
import {Genre} from "./Genre";
interface IProps{
    genres:IGenre
}

const Genres:FC<IProps> = ({genres}) => {
    return (
        <div className={css.Buttons}>
            {genres.genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {Genres};
import { Card } from '../Card/Card';
import s from './Catalog.module.css';

export function Catalog() {
    return (
        <div className="container">
            <div className={s.catalog}>
                <h1 className={s.hh}>Каталог товаров</h1>
                <div className={s.catalogs}>
                    <Card image='https://ir.ozone.ru/s3/multimedia-i/c1000/6495068454.jpg' name='Ароматизатор для автомобиля IDEAL с ароматом "Новая машина"' price='1000'/>
                    <Card image='https://ir.ozone.ru/s3/multimedia-r/c1000/6749532783.jpg' name='Ароматизатор для автомобиля гелевый "Новая машина"' price='1000'/>
                    <Card image='https://ir.ozone.ru/s3/multimedia-x/c1000/6845060265.jpg' name='Ароматизатор для автомобиля' price='1000'/>
                    <Card image='https://ir.ozone.ru/s3/multimedia-f/c1000/6841670055.jpg' name='Ароматизатор для автомобиля' price='1000'/>
                    <Card image='https://basket-12.wbbasket.ru/vol1696/part169677/169677513/images/big/1.webp' name='Ароматизатор для автомобиля' price='1000'/>
                    <Card image='https://ir.ozone.ru/s3/multimedia-u/c1000/6439202658.jpg' name='Ароматизатор для автомобиля' price='1000'/>
                </div>
            </div>
        </div>
    )
}
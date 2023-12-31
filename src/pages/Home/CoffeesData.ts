import ExpressoTradicionalImg from '../../assets/Coffees/tradicional_Coffee.svg'
import ExpressoAmericanoImg from '../../assets/coffees/expresso_americano.svg'
import ExpressoCremosoImg from '../../assets/coffees/expresso_Cremoso.svg'
import ExpressoGeladoImg from '../../assets/coffees/expresso_Gelado.svg'
import CafeComLeiteImg from '../../assets/coffees/cafe_com_Leite.svg'
import LatteImg from '../../assets/coffees/Latte.svg'
import CapuccinoImg from '../../assets/coffees/Capuccino.svg'
import MacchiatoImg from '../../assets/coffees/Macchiato.svg'
import MocaccinoImg from '../../assets/coffees/Mocaccino.svg'
import ChocolateQuenteImg from '../../assets/coffees/chocolate_Quente.svg'
import CubanoImg from '../../assets/coffees/Cubano.svg'
import HavaianoImg from '../../assets/coffees/Havaiano.svg'
import ArabeImg from '../../assets/coffees/Arabe.svg'
import IrlandesImg from '../../assets/coffees/Irlandes.svg'

export const CoffeeData = [
  {
    id: '0',
    image: ExpressoTradicionalImg,
    type: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '1',
    image: ExpressoAmericanoImg,
    type: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: '2',
    image: ExpressoCremosoImg,
    type: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: '3',
    image: ExpressoGeladoImg,
    type: ['tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: '4',
    image: CafeComLeiteImg,
    type: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: '5',
    image: LatteImg,
    type: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: '6',
    image: CapuccinoImg,
    type: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: '7',
    image: MacchiatoImg,
    type: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: '8',
    image: MocaccinoImg,
    type: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: '9',
    image: ChocolateQuenteImg,
    type: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: '10',
    image: CubanoImg,
    type: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: '11',
    image: HavaianoImg,
    type: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: '12',
    image: ArabeImg,
    type: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: '13',
    image: IrlandesImg,
    type: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
import africanViolet from '../assets/African-Violet.jpg'
import aloeVera from '../assets/Aloe Vera.jpg'
import anthurium from '../assets/Anthurium.jpg'
import barrelCactus from '../assets/Barrel Cactus.jpg'
import birdOfParadise from '../assets/Bird-of-Paradise.jpg'
import bromeliad from '../assets/Bromeliad.jpg'
import echeveria from '../assets/Echeveria.jpg'
import fiddleLeafFig from '../assets/Fiddle Leaf Fig.jpg'
import goldenPothos from '../assets/Golden Pothos.jpg'
import haworthia from '../assets/Haworthia.jpg'
import jadePlant from '../assets/Jade Plant.jpg'
import kalanchoe from '../assets/Kalanchoe.jpg'
import monstera from '../assets/Monstera-Deliciosa.jpg'
import orchid from '../assets/Orchid.avif'
import peaceLily from '../assets/Peace-Lily.jpg'
import pricklyPear from '../assets/Prickly Pear.jpg'
import rubberTree from '../assets/Rubber Tree.jpg'
import snakePlant from '../assets/Snake Plant.jpg'
export const plantsData = [
  // ── Flowering Plants ────────────────────────────────────────────
  {
    id: 1,
    name: 'Peace Lily',
    price: 18.99,
    emoji: '🌸',
    category: 'Flowering Plants',
    image: peaceLily,
  },
  {
    id: 2,
    name: 'Orchid',
    price: 24.99,
    emoji: '🌺',
    category: 'Flowering Plants',
    image: orchid,
  },
  {
    id: 3,
    name: 'African Violet',
    price: 14.99,
    emoji: '💜',
    category: 'Flowering Plants',
    image: africanViolet,
  },
  {
    id: 4,
    name: 'Bromeliad',
    price: 22.99,
    emoji: '🌷',
    category: 'Flowering Plants',
    image: bromeliad,
  },
  {
    id: 5,
    name: 'Anthurium',
    price: 27.99,
    emoji: '❤️',
    category: 'Flowering Plants',
    image: anthurium,
  },
  {
    id: 6,
    name: 'Kalanchoe',
    price: 12.99,
    emoji: '🌼',
    category: 'Flowering Plants',
    image: kalanchoe,
  },

  // ── Tropical Foliage ────────────────────────────────────────────
  {
    id: 7,
    name: 'Monstera Deliciosa',
    price: 34.99,
    emoji: '🌿',
    category: 'Tropical Foliage',
    image: monstera,
  },
  {
    id: 8,
    name: 'Bird of Paradise',
    price: 44.99,
    emoji: '🦜',
    category: 'Tropical Foliage',
    image: birdOfParadise,
  },
  {
    id: 9,
    name: 'Fiddle Leaf Fig',
    price: 39.99,
    emoji: '🍃',
    category: 'Tropical Foliage',
    image: fiddleLeafFig,
  },
  {
    id: 10,
    name: 'Golden Pothos',
    price: 12.99,
    emoji: '💚',
    category: 'Tropical Foliage',
    image: goldenPothos,
  },
  {
    id: 11,
    name: 'Snake Plant',
    price: 19.99,
    emoji: '🌱',
    category: 'Tropical Foliage',
    image: snakePlant,
  },
  {
    id: 12,
    name: 'Rubber Tree',
    price: 29.99,
    emoji: '🌳',
    category: 'Tropical Foliage',
    image: rubberTree,
  },

  // ── Cacti & Succulents ──────────────────────────────────────────
  {
    id: 13,
    name: 'Barrel Cactus',
    price: 9.99,
    emoji: '🌵',
    category: 'Cacti & Succulents',
    image: barrelCactus,
  },
  {
    id: 14,
    name: 'Echeveria',
    price: 7.99,
    emoji: '⭐',
    category: 'Cacti & Succulents',
    image: echeveria,
  },
  {
    id: 15,
    name: 'Aloe Vera',
    price: 11.99,
    emoji: '🪴',
    category: 'Cacti & Succulents',
    image: aloeVera,
  },
  {
    id: 16,
    name: 'Jade Plant',
    price: 13.99,
    emoji: '💎',
    category: 'Cacti & Succulents',
    image: jadePlant,
  },
  {
    id: 17,
    name: 'Prickly Pear',
    price: 8.99,
    emoji: '🌵',
    category: 'Cacti & Succulents',
    image: pricklyPear,
  },
  {
    id: 18,
    name: 'Haworthia',
    price: 10.99,
    emoji: '🪴',
    category: 'Cacti & Succulents',
    image:haworthia,
  },
]

export const categories = [...new Set(plantsData.map(p => p.category))]

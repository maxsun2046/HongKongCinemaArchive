import posterPlaceholder from './posters/archive-placeholder.svg'
import coverPlaceholder from './covers/archive-placeholder.svg'

const imageAssets = {
  'posters/the_big_boss_1971.svg': posterPlaceholder,
  'posters/fist_of_fury_1972.svg': posterPlaceholder,
  'posters/enter_the_dragon_1973.svg': posterPlaceholder,
  'posters/the_way_of_the_dragon_1972.svg': posterPlaceholder,
  'posters/project_a_1983.svg': posterPlaceholder,
  'posters/police_story_1985.svg': posterPlaceholder,
  'posters/wheels_on_meals_1984.svg': posterPlaceholder,
  'posters/heart_of_dragon_1985.svg': posterPlaceholder,
  'posters/miracles_1989.svg': posterPlaceholder,
  'covers/the_big_boss_1971.svg': coverPlaceholder,
  'covers/fist_of_fury_1972.svg': coverPlaceholder,
  'covers/enter_the_dragon_1973.svg': coverPlaceholder,
  'covers/the_way_of_the_dragon_1972.svg': coverPlaceholder,
  'covers/project_a_1983.svg': coverPlaceholder,
  'covers/police_story_1985.svg': coverPlaceholder,
  'covers/wheels_on_meals_1984.svg': coverPlaceholder,
  'covers/heart_of_dragon_1985.svg': coverPlaceholder,
  'covers/miracles_1989.svg': coverPlaceholder,
}

export function resolveFilmImage(path) {
  return path ? imageAssets[path] : undefined
}

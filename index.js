const categories = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: [],
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: 'category5',
    subcategories: [],
  },
];

const PathIs = {
  FOUND: true,
  NOT_FOUND: false,
};

// TO-DO: Implement this function
const getCategoryPath = (categories, categoryName) => {
  let path;
  path = '';

  const lookForCategoryPath = (categories, categoryName) => {
    for (category of categories) {
      if (category.name === categoryName) {
        path += '/' + category.name;
        return PathIs.FOUND;
      } else if (category.subcategories.length > 0) {
        path += '/' + category.name;
        if (lookForCategoryPath(category.subcategories, categoryName)) {
          // The category has been found! We exit for .. of loop with the "path" updated
          return true;
        }

        // The category is not on the current tree, so we reset the path
        path = '';
      }
    }
    return PathIs.NOT_FOUND;
  };

  lookForCategoryPath(categories, categoryName);

  path = path === '' ? '/404' : path;
  return path;
};

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'

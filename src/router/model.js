import model1 from '../views/model/model1/index.vue'
import model2 from '../views/model/model2/index.vue'

export const model = [
  {
    path: '/model',
    name: 'CommandCenter',
    redirect:'',
    meta: {
      title: '模块',
    },
    children: [
      {
        path: '/model/model1',
        name: 'model1',
        meta: {
          title: '模块1',
        },
        component: () => model1,
      },
      {
        path: '/model/model2',
        name: 'model2',
        meta: {
          title: '模块2',
        },
        component: () => model2,
      },
    ],
  },
]

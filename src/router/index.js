import { createRouter, createWebHistory } from 'vue-router';
import User from '../components/User.vue';
import Booking from '../components/Booking.vue';
import Venue from '../components/Venue.vue';

const routes = [
  {
    path: '/users',
    name: 'User',
    component: User,
  },
  {
    path: '/bookings',
    name: 'Booking',
    component: Booking,
  },
  {
    path: '/venues',
    name: 'Venue',
    component: Venue,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

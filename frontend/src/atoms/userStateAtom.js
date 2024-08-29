import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// Initialize recoil-persist
const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // This key is used as a prefix in localStorage
  storage: localStorage, // Configuration for localStorage (default)
});

// Create a persistent Recoil atom
const userState = atom({
  key: 'userState', // Unique ID for the atom
  default: null, // Default value (initial state)
  effects_UNSTABLE: [persistAtom], // Attach the persist effect
});

export default userState;

import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    const db = await initdb();
    if (db) {
      const tx = db.transaction('jate', 'readwrite');
      const store = tx.objectStore('jate');
      await store.put({ content });
      await tx.done;
      console.log('Content added to the database');
    } else {
      console.error('Cannot add content to the database. Failed to open the database');
    }
  } catch (error) {
    console.error('Error adding content to the database:', error);
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const db = await initdb();
    if (db) {
      const tx = db.transaction('jate', 'readonly');
      const store = tx.objectStore('jate');
      const content = await store.getAll();
      await tx.done;
      console.log('Content retrieved from the database:', content);
      return content;
    } else {
      console.error('Cannot retrieve content from the database. Failed to open the database');
      return [];
    }
  } catch (error) {
    console.error('Error retrieving content from the database:', error);
    return [];
  }
};


initdb();

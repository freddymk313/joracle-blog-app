import { useLocalSearchParams, useNavigation } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { useLayoutEffect } from 'react';

const blogs = {
  '1': {
    title: 'Premier blog',
    content:
      'Voici un contenu long détaillé du blog numéro 1...',
    image: 'https://unsplash.com/photos/group-of-people-waving-their-hands-6liebVeAfrY',
    category: 'Spiritualité',
    createdAt: '29 Juil 2025',
    tags: ['#foi', '#prière'],
  },
  '2': {
    title: 'Deuxième blog',
    content:
      'Ce blog traite de l’importance des études bibliques...',
    image: 'https://unsplash.com/photos/group-of-people-waving-their-hands-6liebVeAfrY',
    category: 'Études bibliques',
    createdAt: '25 Juil 2025',
    tags: ['#bible', '#évangile'],
  },
};

export default function BlogDetailScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const blog = blogs[id as string];

  useLayoutEffect(() => {
    if (blog) {
      navigation.setOptions({ title: blog.title });
    }
  }, [navigation, blog]);

  if (!blog) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Blog introuvable</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: blog.image }} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.category}>{blog.category}</Text>
        <Text style={styles.date}>{blog.createdAt} • 5 min lecture</Text>
      </View>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.content}>{blog.content}</Text>
      <View style={styles.tags}>
        {blog.tags.map((tag, index) => (
          <Text key={index} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, borderRadius: 12, marginBottom: 16 },
  header: { marginBottom: 12 },
  category: {
    backgroundColor: '#F4511E',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: { color: '#888', fontSize: 12 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#222', marginBottom: 12 },
  content: { fontSize: 16, color: '#444', lineHeight: 24, marginBottom: 20 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    color: '#555',
    marginRight: 8,
    marginBottom: 8,
  },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  notFound: { fontSize: 16, color: 'gray' },
});

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

const blogs = [
  {
    id: '1',
    title: 'Premier blog',
    content: 'Contenu détaillé du blog 1',
    image: 'https://via.placeholder.com/400x200.png?text=Blog+1',
    category: 'Spiritualité',
    createdAt: '29 Juil 2025',
    tags: ['#foi', '#évangile'],
  },
  {
    id: '2',
    title: 'Deuxième blog',
    content: 'Contenu détaillé du blog 2',
    image: 'https://via.placeholder.com/400x200.png?text=Blog+2',
    category: 'Études bibliques',
    createdAt: '25 Juil 2025',
    tags: ['#bible', '#enseignement'],
  },
  {
    id: '3',
    title: 'Troisieme blog',
    content: 'Contenu détaillé du blog 2',
    image: 'https://via.placeholder.com/400x200.png?text=Blog+2',
    category: 'Études bibliques',
    createdAt: '25 Juil 2025',
    tags: ['#bible', '#enseignement'],
  },
];

export default function Home() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(`/blog/${item.id}`)}
      style={styles.card}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.meta}>
          <Text style={styles.metaText}>{item.createdAt}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.metaText}>5 min lecture</Text>
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.content}</Text>

        <View style={styles.footer}>
          <Text style={styles.readMore}>Lire plus →</Text>
          <View style={styles.tags}>
            {item.tags.map((tag, index) => (
              <Text key={index} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={blogs}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  categoryBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#F4511E',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  metaText: {
    color: '#888',
    fontSize: 12,
  },
  dot: {
    marginHorizontal: 6,
    fontSize: 12,
    color: '#888',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  description: {
    color: '#555',
    fontSize: 14,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readMore: {
    color: '#E53935',
    fontWeight: '600',
  },
  tags: {
    flexDirection: 'row',
    gap: 6,
  },
  tag: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    color: '#555',
    marginLeft: 4,
  },
});

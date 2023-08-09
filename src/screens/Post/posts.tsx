import React, { Text, TouchableOpacity } from 'react-native';
import { View, FlatList, Image } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useEffect, useState } from 'react';
import { fetchPostData } from '../../redux/posts/post-actions';
import { PostItemModel, PostModel } from '../../models/post-model';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { styles } from './posts.styles';
import { pushView } from '../../utils/commonFunction';

interface routeType {
  loggedIn: boolean
}

//NOTE: post Item
const PostItem = ({ item, isLoggedIn }: { item: PostItemModel, isLoggedIn: boolean }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.itemView}
      onPress={() => {
        pushView(navigation, "DetilsPage", { item: item, isLoggedIn: isLoggedIn });
      }}>
      <View style={styles.view}>
        <Image source={{ uri: item?.author?.image }} style={styles.authorImage} />
        <View>
          <Text style={styles.userNameText}>{item?.author?.username}</Text>
        </View>
      </View>
      <View>
        <Text style={{ color: 'white', marginTop: 5 }}>{item?.description}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default function Posts() {
  const route: RouteProp<{ params: routeType }, 'params'> = useRoute();
  const isLoggedIn = route.params.loggedIn;
  const dispatch = useAppDispatch();
  const allPostData: PostModel = useAppSelector(state => state.posts);
  const [posts, setPosts] = useState<Array<PostItemModel>>([]);
  const [offset, setOffset] = useState<number>(0);

  //NOTE: useEffect Api call and handle
  useEffect(() => {
    dispatch(fetchPostData(offset));
  }, []);
  useEffect(() => {
    if (allPostData?.articles?.length > 0) {
      if (offset === 0) {
        setPosts(allPostData?.articles);
      } else {
        setPosts(posts.concat(allPostData?.articles));
      }
    }
  }, [allPostData?.articles]);

  //NOTE: LOAD MORE DATA
  const loadMoreData = () => {
    if (posts?.length >= 10) {
      dispatch(fetchPostData(offset + 1));
      setOffset(offset + 1);
    }
  };

  return (
    <View>
      <FlatList
        data={posts}
        contentContainerStyle={{}}
        renderItem={({ item }: { item: PostItemModel }) => <PostItem item={item} isLoggedIn={isLoggedIn} />}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
}


import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Button,
  Platform,
} from 'react-native';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommentService from '../../services/commentService';
import { AuthorModel, PostItemModel } from '../../models/post-model';
import { RouteProp, useRoute } from "@react-navigation/native";
import { styles } from './detailPage.style'
interface DetailItem {
  author: AuthorModel,
  body: string,
  id: string
}

interface routeType {
  item: PostItemModel,
  isLoggedIn: boolean
}

//NOTE: Comment Item
const RenderItem = ({ item, onPress }: { item: DetailItem, onPress: () => void }) => (
  <View
    style={styles.itemView}>
    <View style={styles.view}>
      <Image source={{ uri: item.author.image }} style={styles.authorImage} />
      <View>
        <Text style={styles.userNameText}>{item.author.username}</Text>
      </View>
    </View>
    <View>
      <Text style={{ color: 'black', marginTop: 5, marginLeft: 10 }}>
        {item.body}
      </Text>
    </View>
    <Button title={'Delete'} onPress={onPress} />
  </View>
);

const DetilsPage = () => {
  const route: RouteProp<{ params: routeType }, 'params'> = useRoute();
  const currenItem = route.params.item;
  const isLoggedIn = route.params.isLoggedIn;
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Array<DetailItem>>([]);

  useEffect(() => {
    if (isLoggedIn) {
      callApi();
    }
  }, []);

  //NOTE: Api Call
  const callApi = async () => {
    const response = await CommentService.getComments(currenItem.slug);
    setComments(response.comments);
  };
  const callPostCommentApi = async () => {
    if (comment.trim().length > 0) {
      await CommentService.postComments(currenItem.slug, {
        comment: { body: comment },
      });
      setComment('');
      callApi();
    }
  };
  const deleteCommentApi = async (id: string) => {
    await CommentService.deletComment(currenItem.slug, id);
    callApi();
  };

  //NOTE: Header Components
  const header = () => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={styles.header}>
          <View style={styles.headerImageView}>
            <Image
              source={{
                uri: currenItem.author.image,
              }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 10,
              }}
            />
          </View>
          <Text style={styles.headerMiddleText}>
            {currenItem.author.username}
          </Text>
        </View>
        <Text style={styles.middleText}>{currenItem.description}</Text>
        <View style={styles.innerContainer}>
          <View style={styles.bottomItemsView}>
            <AntDesign name="hearto" size={20} color={'gray'} />
            <Text style={styles.bottonText}>
              {currenItem.favoritesCount} Support
            </Text>
          </View>
          <View style={styles.bottomItemsView}>
            <AntDesign name="message1" size={20} color={'gray'} />
            <Text style={styles.bottonText}>0 Comment</Text>
          </View>
          <View style={styles.bottomItemsView}>
            <AntDesign name="sharealt" size={20} color={'gray'} />
            <Text style={styles.bottonText}>0 views</Text>
          </View>
        </View>
        <View style={styles.border} />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.mainContiner}>
        <View style={{ height: '85%' }}>
          <FlatList
            ListHeaderComponent={header()}
            data={comments}
            renderItem={({ item }: { item: DetailItem }) => <RenderItem item={item} onPress={() => deleteCommentApi(item.id)} />}
            stickyHeaderIndices={[0]}
          />
        </View>
        {isLoggedIn && (
          <View style={styles.commentsView}>
            <Image
              source={{
                uri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e',
              }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 10,
              }}
            />
            <TextInput
              placeholder="Enter Your Commnets"
              placeholderTextColor={'white'}
              style={styles.textInput}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={setComment}
              value={comment}
            />
            <Button title={'send'} onPress={() => callPostCommentApi()} />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default DetilsPage;



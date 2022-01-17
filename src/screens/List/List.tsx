import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {INavigation} from '../../interface/INavigation';
import {MainRoutes} from '../../components/Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {getList, updateList} from '../../actions/list.action';
import {IRootState} from '../../interface/IRootState';
import R from '../../resources/R';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Loader} from '../../components/Loader';
import {useInterval} from '../../utility/customHooks';
import {IDataListItem} from '../../interface/IList';

export type IProps = INavigation<MainRoutes, 'List'>;

export const List: React.FC<IProps> = ({navigation}) => {
  // Redux
  const dataList = useSelector((state: IRootState) => state.list.data.dataList);
  const loading = useSelector((state: IRootState) => state.list.loading);
  // State
  const [seconds, setSeconds] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [isPause, setIsPause] = useState(false);
  // Dispatch
  const dispatch = useDispatch();

  const param = {
    page: page,
    per_page: 25,
  };
  // update every 60 seconds
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsPause(false);
      dispatch(getList(param));
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
  useEffect(() => {
    if (seconds >= 60) {
      setSeconds(0);
      setPage(1);
      dispatch(getList(param));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);
  // init load

  useInterval(
    () => {
      setSeconds(seconds + 1);
    },
    !isPause ? 1000 : null,
  );

  if (!dataList || dataList.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.empty}>{R.string.list.empty}</Text>
      </View>
    );
  }
  if (loading) {
    return <Loader />;
  }
  const footer = loadMore ? <Loader /> : null;

  const onRefresh = () => {
    if (seconds > 15) {
      setRefresh(true);
      setPage(1);
      setSeconds(0);
      setTimeout(() => {
        dispatch(getList(param));
        setRefresh(false);
      }, 100);
    }
  };
  const onEndReached = async () => {
    setPage(page + 1);
    setLoadMore(true);
    dispatch(updateList(param));
    setTimeout(() => {
      setLoadMore(false);
    }, 1000);
  };
  const renderItem = ({item}: {item: IDataListItem}) => {
    const createdDate =
      item.created_at && new Date(Date.parse(item.created_at)).toLocaleString();
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate('Details', {
            listItem: item,
          });
          setSeconds(0);
          setIsPause(true);
        }}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: item.actor?.avatar_url,
            }}
          />
          <Text style={styles.title}>{item.actor?.login}</Text>
        </View>
        <Text style={styles.text}>
          {R.string.general.id} - {item.id}
        </Text>
        <Text style={styles.text}>
          {R.string.general.createdDate} - {createdDate}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={dataList}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        // handle updates
        onEndReached={onEndReached}
        refreshing={refresh}
        onRefresh={onRefresh}
        ListFooterComponent={footer}
        // optimization props
        maxToRenderPerBatch={25}
        initialNumToRender={10}
        windowSize={25}
        updateCellsBatchingPeriod={55}
        // handle scrolling
        onScrollBeginDrag={() => setIsPause(true)}
        onScrollEndDrag={() => setIsPause(false)}
      />
    </View>
  );
};

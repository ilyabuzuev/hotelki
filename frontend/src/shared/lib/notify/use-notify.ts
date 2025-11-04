import { useQuasar } from 'quasar';

const NotifyMessage = {
  CATEGORY_SYMBOL_ERROR: 'Категория из адресной строки содержит недопустимые символы',
  CATEGORY_EXISTING_ERROR:
    'Категории, указанной в адресной строке не существует в списке категорий',
  CATEGORY_ALREADY_EXIST: 'Категория с таким наименованием уже существует',
  WISH_SUCCESS_CREATE: 'Хотелка успешно добавлена',
  WISH_NEGATIVE_CREATE: 'При добавлении хотелки произошла ошибка',
  ATTRIBUTE_EXISTING_ERROR: 'Атрибут с таким названием уже есть',
} as const;

type NotifyMessageType = (typeof NotifyMessage)[keyof typeof NotifyMessage];

const useNotify = () => {
  const $q = useQuasar();

  function show(type: 'negative' | 'positive', message: NotifyMessageType): void {
    $q.notify({ type, message });
  }

  return { show };
};

export { type NotifyMessageType, NotifyMessage, useNotify };

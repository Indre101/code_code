const toEmoticon = (value) => {
  switch (value) {
    case 'shrug':
      return '|_{"}_|';

    case 'smiley face':
      return ':)';

    case 'frowny face':
      return ':(';

    case 'winky face':
      return ';)';

    case 'heart':
      return '<3';

    default:
      return '|_(* ~ *)_|';

  }
}
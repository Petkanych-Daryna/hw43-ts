export interface IProps {
  title: string;
}

export class Component<T> {
  props: T;

  constructor(props: T) {
    this.props = props;
  }
}

export class Page extends Component<IProps> {
  pageInfo() {
    console.log('Task 4 Page title:', this.props.title);
  }
}
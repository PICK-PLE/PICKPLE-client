import { Component, ComponentType, createElement, ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

type FallbackProps = {
  error: Error | null;
  resetErrorBoundary: () => void;
};

type ErrorBoundaryProps = {
  fallback: ComponentType<FallbackProps>;
  onReset?: () => void;
  children: ReactNode;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false, // 오류가 발생했는지 여부를 state 상태로 저장합니다.
      error: null, // 발생한 오류의 정보를 state 상태로 저장합니다.
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // 오류 상태 업데이트
    return {
      hasError: true,
      error,
    };
  }

  resetErrorBoundary(): void {
    this.props.onReset?.();

    // 에러 상태를 기본으로 초기화합니다.
    this.setState({
      hasError: false,
      error: null,
    });
  }

  /* componentDidCatch 메소드는 오류 정보와 상세 정보를 파라미터로 얻을 수 있습니다.
    주로 오류를 로깅해야 할때 해당 메소드에 접근해서 로깅할 수 있습니다. 
  */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    const { state, props } = this;

    const { hasError, error } = state;

    const { fallback, children } = props;

    const fallbackProps: FallbackProps = {
      error,
      resetErrorBoundary: this.resetErrorBoundary.bind(this),
    };

    // fallback 컴포넌트 측에서 오류 정보를 props로 받을 수 있도록 설정
    const fallbackComponent = createElement(fallback, fallbackProps);

    // 오류 발생 여부를 체크하여, 오류가 발생했을때 조건부 렌더링 처리를 해줍니다.
    return hasError ? fallbackComponent : children;
  }
}

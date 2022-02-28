// 테스트 유틸 라이브러리 로딩
import { shallowMount } from '@vue/test-utils';
// 컴포넌트 로딩
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메시지 출력', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'asd',
        };
      },
    });

    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });
});

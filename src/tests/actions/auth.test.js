import { login, logout } from '../../actions/auth';

test('should create login action object correctly', () => {
    const uid = '123456';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should create logout action object correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});

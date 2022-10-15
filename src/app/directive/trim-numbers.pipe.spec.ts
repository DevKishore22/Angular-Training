import { TrimNumbersPipe } from './trim-numbers.pipe';

describe('TrimNumbersPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimNumbersPipe();
    expect(pipe).toBeTruthy();
  });
});

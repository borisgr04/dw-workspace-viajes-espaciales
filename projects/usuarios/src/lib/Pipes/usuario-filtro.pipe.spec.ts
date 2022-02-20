import { UsuarioFiltroPipe } from './usuario-filtro.pipe';

describe('UsuarioFiltroPipe', () => {
  it('create an instance', () => {
    const pipe = new UsuarioFiltroPipe();
    expect(pipe).toBeTruthy();
    let filtrado= pipe.transform([
      {identificacion:"5555", nombre:"Boris", rol:"Pasajero"},  
    ],'BO');
    expect(filtrado.length).toBe(1);
  });

  it('create an instance', () => {
    const pipe = new UsuarioFiltroPipe();
    expect(pipe).toBeTruthy();
    let filtrado= pipe.transform([
      {identificacion:"5555", nombre:"Boris", rol:"Pasajero"},  
    ],'ANY');
    expect(filtrado.length).toBe(0);
  });
});

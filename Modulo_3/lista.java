/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
   import java.util.ArrayList;
   
public class Main
{
	public static void main(String[] args) {
	    ArrayList<String> carros = new ArrayList<String>();
	    
	    //adiciona um elemento no fim da lista
	    
	    carros.add("Uno");
	    carros.add("Gol");
	    carros.add("Palio");
	    
	    //adiciona com indice , adiciona o elemento no indice informado
	    carros.add(1, "Sandero");
	    
	    //contains  verifica a existencia de um elemento no array
	   if (carros.contains("corolla")) {
	       System.out.println("Existe o elemento Gol no array");
	     }  else   {
	         System.out.println("não existe o elemento Gol no array");
	         
	     }
	   
	      //set atualiza o elemento do indice informado pelo elemento informado
	       carros.set(0, "Novo Uno");
	     
	      // index off-retorna o indice da primeira ocorrencia do elemento
	       int primeiraPosicaoGol = carros.indexOf("Gol");
	        System.out.println(primeiraPosicaoGol);
	        
	        // lastindexoff-retorna o indice da ultima ocorrencia do elemento
	        int ultimaPosicaoGol = carros.lastIndexOf("Gol");
	        System.out.println(ultimaPosicaoGol);
	        
	        //indexoff- retorna -1 quando nao existe 
	        int primeiraPosicaoCorolla = carros.indexOf("Corolla");
	        System.out.println(primeiraPosicaoCorolla);
	        
	        //indexoff- retorna -1 quando nao existe 
	         int ultimaPosicaoCorolla = carros.lastIndexOf("Corolla");
	        System.out.println(ultimaPosicaoCorolla);
	    
	    
	    //size retorna o tamanho do array
	    for(int i = 0; i < carros.size(); i++){
	    //get retorna o elemento do indice informada
		System.out.println(carros.get(i));
	    
	    }
	    
	    //remove-remove o elemento do indice informado
	    carros.remove(0);
	    //carros.remove(1);
	    
	    System.out.println(" apos a remocao");
	    
	   /* for(int i = 0; i < carros.size(); i++){
		System.out.println(carros.get(i));
	        
	    }*/
	    
	    System.out.println(carros);
	    
	    // clear-remove todos os elementos do array
	    carros.clear();
	    
	    System.out.println(carros);
	  }
    }
	    
	    

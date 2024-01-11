package codesyncgroup.ticketsystem.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "category")
public class CategoryEntity {
    @Id
    @Column(name = "id_category" , unique = true , nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idCategory;
    String faculty;
    String departament;
    String topic;
}
